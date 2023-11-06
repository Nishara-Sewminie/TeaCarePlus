import os

old_filenames = [
    '1F2.jpg',
    '1R1.png',
    '1R2.png',
    '1R3.png',
    '2.png',
]

base_new_filename = 'BB'

counter = 1

for old_filename in old_filenames:

    file_extension = os.path.splitext(old_filename)[1]

    new_filename = f'{base_new_filename}{counter:04}{file_extension}'

    os.rename(old_filename, new_filename)
    print(f"Image renamed as: {new_filename}")

    counter += 1
