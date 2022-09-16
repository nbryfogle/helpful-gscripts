let directories = {
  'default': '',
  'document': '',
  'spreadsheet': '',
  'presentation': '',
  'drawing': '',
  'script': ''
}

function organizeFiles() {
  const query = '"root" in parents and trashed = false and ' +
    'not mimeType = "application/vnd.google-apps.folder"';

  let files;
  let pageToken = null;
  do {
    try {
      files = Drive.Files.list({
        q: query,
        maxResults: 100,
        pageToken: pageToken
      });
      
      if (!files.items || files.items.length === 0) {
        Logger.log('No files found.');
        return;
      }


      for (let i = 0; i < files.items.length; i++) {
        const file = files.items[i];

        let folder_id = directories[file.mimeType.split('.').pop()] ?? directories.default;

        let folder = Drive.Files.get(folder_id);

        file.parents = [folder];
        
        Drive.Files.update(file, file.id);

        Logger.log('%s (ID: %s) -> %s (ID: %s)', file.title, file.id, folder.title, folder.id);
      }
      pageToken = files.nextPageToken;
    } catch (err) {
      // TODO (developer) - Handle exception
      Logger.log('Failed with error %s', err.message);
    }
  } while (pageToken);
}