import csv
import json
import os
import re
import urllib.request

csv_path = 'public/logos/logos_.csv'
json_path = 'data/portfolio-data.json'
logos_dir = 'public/logos/teams' # create a new subfolder to be safe and clean, wait let's use public/logos/highres

os.makedirs('public/logos/highres', exist_ok=True)

logo_map = {}

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        company = row.get('Company Name', '').strip()
        logo_str = row.get('Logo', '').strip()
        
        if company and logo_str:
            # find the URL in parentheses
            match = re.search(r'\(https://v5\.airtableusercontent\.com/[^\)]+\)', logo_str)
            if match:
                url = match.group(0)[1:-1]
                logo_map[company] = url

with open(json_path, 'r', encoding='utf-8') as f:
    portfolio_data = json.load(f)

updated_count = 0
for company in portfolio_data:
    name = company.get('company_name', '')
    if not name:
        continue
        
    url = logo_map.get(name)
    if not url:
        # Try to match without suffix
        simple_name = re.sub(r',?\s+(Inc\.?|LLC|Corp\.?|Corporation|Ltd\.?|Limited|Technologies|Technology|Tech)$', '', name, flags=re.IGNORECASE).strip()
        for csv_name, csv_url in logo_map.items():
            simple_csv_name = re.sub(r',?\s+(Inc\.?|LLC|Corp\.?|Corporation|Ltd\.?|Limited|Technologies|Technology|Tech)$', '', csv_name, flags=re.IGNORECASE).strip()
            if simple_name.lower() == simple_csv_name.lower():
                url = csv_url
                break
                
    if url:
        # Format safe file name
        safe_name = re.sub(r'[^a-z0-9]', '_', name.lower())
        ext = '.png'
        local_filename = f"{safe_name}{ext}"
        local_path = os.path.join('public/logos/highres', local_filename)
        
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
                out_file.write(response.read())
            
            # Update json
            company['logo'] = f"/logos/highres/{local_filename}"
            updated_count += 1
            print(f"Downloaded: {name}")
        except Exception as e:
            print(f"Failed to download {name}: {e}")

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(portfolio_data, f, indent=4)

print(f"Successfully downloaded and updated {updated_count} logos.")
