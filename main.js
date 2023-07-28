function test() {
    var files = DriveApp.getFiles();
    while (files.hasNext()) {
        var file = files.next();
        console.log(file.getName());
    }
}
