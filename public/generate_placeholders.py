
import os
import random

# Projects
projects = [
    "asynchonous-reluctance-motor", # Note: using the ID from data.js which is the filename base
    "nodemcu-car",
    "crypto-pump-notifier",
    "corona-analytics"
]

# Map to the filenames used in data.js (which I previously set as simplified names in step 110)
# Step 110 used: async_motor, nodemcu_car, crypto_pump, corona_analytics
# Let's match those.
project_filenames = [
    "async_motor",
    "nodemcu_car",
    "crypto_pump",
    "corona_analytics"
]

def generate_svg(filename, text):
    width, height = 800, 400
    
    # Random rects
    rects = ""
    for _ in range(30):
        x = random.randint(0, width)
        y = random.randint(0, height)
        w = random.randint(10, 100)
        h = random.randint(2, 5)
        opacity = random.random() * 0.5
        rects += f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="#0f0" opacity="{opacity}" />\n'

    # Random lines
    lines = ""
    for _ in range(10):
        x1 = random.randint(0, width)
        y1 = random.randint(0, height)
        x2 = random.randint(0, width)
        y2 = random.randint(0, height)
        lines += f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="#0f0" stroke-width="1" opacity="0.3" />\n'

    svg_content = f'''
<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0a0a0f" />
  {rects}
  {lines}
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="40" fill="#fff" font-weight="bold" style="text-shadow: 2px 2px #0f0;">{text}</text>
</svg>
    '''
    
    with open(f"images/{filename}.svg", "w") as f:
        f.write(svg_content.strip())
    print(f"Generated images/{filename}.svg")

os.makedirs("images", exist_ok=True)
for p in project_filenames:
    generate_svg(p, p.upper().replace('_', ' '))
