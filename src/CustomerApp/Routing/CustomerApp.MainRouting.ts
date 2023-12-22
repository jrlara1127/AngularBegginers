import { HomeComponent } from "../Home/CustomerApp.HomeComponent";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    //{ path: 'Customer', loadChildren: '../Customer/CustomerApp.CustomerModule#CustomerModule' },
    {
        path: 'Customer',
        loadChildren: () => import('../Customer/CustomerApp.CustomerModule').then(m => m.CustomerModule)
      },
    //{ path: 'Supplier', loadChildren: '../Supplier/CustomerApp.SupplierModule#SupplierModule' },
    {
        path: 'CustoSuppliermer',
        loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(m => m.SupplierModule)
      },
    { path: '', component: HomeComponent }
    
];