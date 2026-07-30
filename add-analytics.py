#!/usr/bin/env python3
"""
Script to add Vercel Web Analytics to all HTML files in the public directory.
"""
import os
import re
from pathlib import Path

# The analytics script to inject
ANALYTICS_SCRIPT = """<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
"""

def add_analytics_to_file(filepath):
    """Add analytics script to a single HTML file if not already present."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if analytics is already added
    if '/_vercel/insights/script.js' in content:
        print(f"⏭️  Skipped {filepath} (analytics already present)")
        return False
    
    # Find the closing head tag and insert the analytics script before it
    if '</head>' not in content:
        print(f"⚠️  Warning: No </head> tag found in {filepath}")
        return False
    
    # Replace the closing head tag with analytics + closing head tag
    updated_content = content.replace('</head>', f'{ANALYTICS_SCRIPT}</head>')
    
    # Write the updated content back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✅ Added analytics to {filepath}")
    return True

def main():
    """Process all HTML files in the public directory."""
    public_dir = Path('public')
    
    if not public_dir.exists():
        print("Error: public directory not found")
        return
    
    html_files = list(public_dir.rglob('*.html'))
    print(f"Found {len(html_files)} HTML files\n")
    
    updated_count = 0
    skipped_count = 0
    
    for html_file in sorted(html_files):
        if add_analytics_to_file(html_file):
            updated_count += 1
        else:
            if '/_vercel/insights/script.js' in html_file.read_text(encoding='utf-8'):
                skipped_count += 1
    
    print(f"\n{'='*60}")
    print(f"✅ Updated: {updated_count} files")
    print(f"⏭️  Skipped: {skipped_count} files (already had analytics)")
    print(f"📊 Total:   {len(html_files)} files")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
