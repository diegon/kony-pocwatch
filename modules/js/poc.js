function configureNotifications() {

//Sample code to create actions. Make sure this code is executed before notification gets fired.
	
	var ReadMailObj = kony.notificationsettings.createAction({"id":"ReadMail", "label":"ReadMail", "pspConfig":{"activationMode":kony.notificationsettings.ACTIVATION_MODE_FORWARDS, "authenticationRequired": true, "destructive": true, visibleOn: kony.notificationsettings.BOTH}});
	
	var DeleteMailObj = kony.notificationsettings.createAction({"id":"DeleteMail", "label":"DeleteMail", "pspConfig":{"activationMode":kony.notificationsettings.ACTIVATION_MODE_FORWARDS, "authenticationRequired": true, "destructive": true, visibleOn: kony.notificationsettings.BOTH}});
	
	
//Sample code to create category
	
	
	var actionArr = [ReadMailObj, DeleteMailObj];
	var minActionArr = [ReadMailObj, DeleteMailObj];
	    
	var categoryObj = kony.notificationsettings.createCategory({"categoryId":"newmail", "actions":actionArr, "pspConfig":{"minimalActions": minActionArr}});
	
	
	
//Registering Category
	
	var categoryArr = [categoryObj];
	kony.notificationsettings.registerCategory( {"categories": categoryArr,"pspConfig":{ "types":[0,1,2]}} );
	
	kony.localnotifications.setCallbacks({onlinenotification:online_callback, offlinenotification: offline_callback});	

}

function openNotification() {

//Sample code to create notification.

	var datalocal = new Date();
	
	var notificationId = "01";
    var date = datalocal.getDate() + " Mar 2015 15:00:00 +0530";
    var format = "dd MMM yyyy HH:mm:ss Z";
    var message = "Local notification Received";
    var title = "Title";
    var categoryId = "newmail";
    kony.localnotifications.create({
        "id": notificationId,
        "dateTime": {
            "date": date,
            "format": format
        },
        "message": message,
        "title": title,
        "categoryId": categoryId
    });

}

function online_callback(notificationobject, actionid){
	kony.print("online_callback");
	kony.print(actionid);
	kony.print(notificationobject);
}


function offline_callback(notificationobject, actionid){
	kony.print("offline_callback");
	kony.print(actionid);
	kony.print(notificationobject);
}