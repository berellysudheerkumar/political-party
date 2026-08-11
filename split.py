from PIL import Image
import os
import glob

# Find image files in the current folder
extensions = ["*.jpg", "*.jpeg", "*.png", "*.webp", "*.JPG", "*.JPEG", "*.PNG", "*.WEBP"]

images = []

for extension in extensions:
    images.extend(glob.glob(extension))

if not images:
    print("❌ No image found in this folder.")
    exit()

if len(images) > 1:
    print("Multiple images found:")
    for i, image in enumerate(images, 1):
        print(f"{i}. {image}")

    choice = int(input("\nEnter image number: "))
    input_image = images[choice - 1]
else:
    input_image = images[0]

# Output folder
output_folder = "split_images"
os.makedirs(output_folder, exist_ok=True)

# Open image
image = Image.open(input_image)

width, height = image.size
middle = height // 2

# Split horizontally: TOP + BOTTOM
top = image.crop((0, 0, width, middle))
bottom = image.crop((0, middle, width, height))

# Save
top.save(
    os.path.join(output_folder, "image_1.jpg"),
    quality=95
)

bottom.save(
    os.path.join(output_folder, "image_2.jpg"),
    quality=95
)

print("\n✅ Done!")
print(f"Input: {input_image}")
print("Created:")
print("  image_1.jpg  → TOP")
print("  image_2.jpg  → BOTTOM")