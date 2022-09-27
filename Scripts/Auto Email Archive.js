function AutoArchive() {
  let threads = GmailApp.getInboxThreads();

  let now = new Date();
  let weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);

  if (threads) {
    for (let thread of threads) {

      let date = thread.getLastMessageDate();

      if (date < weekAgo && !thread.isUnread()) {
        thread.moveToArchive();
        Logger.log('ID: %s; DATE: %s', thread.getId(), thread.getLastMessageDate());
      }
    }
  } else {
    Logger.log('No emails found.')
  }

}
