// tslint:disable:max-line-length
export const routes = [
    { 
        path: "", 
        redirectTo: "main", 
        pathMatch: "full" 
    },
    
    {
        path: "main",
        loadChildren: "./modules/main/main.module#MainModule",
        data: { title: "Localized Reminders" }
    }
];
