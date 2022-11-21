classes = {
  // Key/Label pairs
  "Mr. Smith's class": "Classes/Smith"
}

function getUnlabeled() {
  let unlabeled = [];

  for (let email of GmailApp.getInboxThreads()) {
    let labels = email.getLabels()
    let hasLabel = false;
    let label_names = []

    for (let label of labels) {
      label_names.push(label.getName())
    }

    for (let name in classes) {
      console.log(name);
      if(label_names.includes(classes[name])) {
        hasLabel = true;
        break;
      }
    }
    if(!hasLabel) {
      let message = email.getMessages()[0];
      unlabeled.push([email, message]);
    }
  }
  return unlabeled;
}

function labelEmails() {
  unlabeled = getUnlabeled();

  for (let message of unlabeled) {
    for (let name in classes) {
      if (message[1].getBody().includes(name)) {
        message[0].addLabel(GmailApp.getUserLabelByName(classes[name]));
        console.log("ID: %s; LABEL: %s", message[1].getId(), classes[name]);
        break;
      }
    }
  }
}
