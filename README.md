# helpful-gscripts
A small repository containing helpful Google Apps Scripts I made in my free time.

## Auto Email Archive

This script automatically archives email threads in your inbox who's latest thread is older than one week.

**Services:**
- Gmail API Service

## Drive File Organizer

This script organizes different file types in your drive into folders. 

To use, you have to add a value and key to the `directories` object at the top of the script. There's already multiple file types, you just have to fill
in the [Folder IDs](https://robindirksen.com/blog/where-do-i-get-google-drive-folder-id). You can also add more based on the mimetype of the file in your Drive.
Make sure to remove any properties that you are not using, as it may cause the script to error.

**Services:**
- Drive API Service
