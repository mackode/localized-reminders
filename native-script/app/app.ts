import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { on as applicationOn, launchEvent, suspendEvent, resumeEvent, exitEvent, lowMemoryEvent, uncaughtErrorEvent, ApplicationEventData } from "application";
import { android, AndroidApplication, AndroidActivityBundleEventData, AndroidActivityEventData, AndroidActivityResultEventData, AndroidActivityBackPressedEventData } from "application";
//import { ios } from "application";
import { registerElement } from "nativescript-angular/element-registry";
import { AppModule } from "./app.module";
import { setCssFileName, start as applicationStart } from "tns-core-modules/application";

registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
setCssFileName("./style.css");

// Android activity events
if (android) {
    android.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    android.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityStoppedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.saveActivityStateEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    android.on(AndroidApplication.activityResultEvent, function (args: AndroidActivityResultEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity +
            ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
    });

    android.on(AndroidApplication.activityBackPressedEvent, function (args: AndroidActivityBackPressedEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
    });
}

applicationOn(launchEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

applicationOn(suspendEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(resumeEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(exitEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(lowMemoryEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

applicationOn(uncaughtErrorEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an NativeScriptError.
        console.log("NativeScriptError: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is NativeScriptError.
        console.log("NativeScriptError: " + args.ios);
    }
});

/*
class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions)

        return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {
        console.log("applicationDidBecomeActive: " + application)
    }
}
ios.delegate = MyDelegate;
*/

platformNativeScriptDynamic().bootstrapModule(AppModule).then(() => {
    console.log("The application is now running!");
}).catch((e) => {
    console.log("The application bootstrapping failed with error: " + e);
});
