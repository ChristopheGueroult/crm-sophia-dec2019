## ma super CRM 

# i18N 
https://github.com/ngx-translate/core
npm install @ngx-translate/core @ngx-translate/http-loader --save
AppModule  -->  imports ->
 TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  // required for AOT compilation
  export function HttpLoaderFactory(http: HttpClient) {
      return new TranslateHttpLoader(http);
  }     
        
LazyLoadingModule -->  TranslateModule.forChild()

AppComponent --> constructor(private translate: TranslateService) {
                         translate.setDefaultLang('en');
                     }
ajouter les fichiers de traduction en.json et fr.json dans assets/i18n
Example code dans prestations list 
<div>
    <!-- translation: translation pipe -->
    <h1>{{ 'demo.title' | translate }}</h1>

    <!-- translation: directive (key as attribute)-->
    <p [translate]="'demo.text'"></p>

    <!-- translation: directive (key as content of element) -->
    <p translate>demo.text</p>
</div>



<!-- translation: translation pipe -->
<p>{{ 'demo.greeting' | translate:{'name':'Andreas'} }}</p>

<!-- translation: directive (key as attribute) -->
<p [translate]="'demo.greeting'" [translateParams]="{name: 'Andreas'}"></p>

<!-- translation: directive (key as content of element)-->
<p translate [translateParams]="{name: 'Andreas'}">demo.greeting</p>

{
  "demo": {
    …
    "greeting": "Hello {{name}}!"
  }
}


Ajouter dans le header 

<select #langSelect (change)="translateService.use(langSelect.value)">
  <option *ngFor="let lang of translateService.getLangs()" [value]="lang" [selected]="lang === translateService.currentLang">{{ lang }}</option>
</select>

Add the following method to the app.component.ts

useLanguage(language: string) {
    this.translate.use(language);
}

# extracteur
https://github.com/biesbjerg/ngx-translate-extract
npm install @biesbjerg/ngx-translate-extract --save-dev
     "extract-translations": "ngx-translate-extract --input ./src --output ./src/assets/i18n/en.json ./src/assets/i18n/fr.json --clean --sort --format namespaced-json"
     
 
 
 ## change detection 
 
 https://stackblitz.com/edit/angular-change-detection-strategy-onpush?file=src%2Fapp%2Fchild%2Fchild.component.ts
 https://stackblitz.com/edit/angular-change-detection-sample?file=src%2Fapp%2Fhello.component.ts
 
 
 https://blog.ninja-squad.com/2018/09/20/angular-performances-part-3/
 https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
 
 SLIDES : https://pascalprecht.github.io/slides/angular-2-change-detection-explained/#/4
profiling : main.ts 


 platformBrowserDynamic().bootstrapModule(AppModule)
   .then(moduleRef => {
     const applicationRef = moduleRef.injector.get(ApplicationRef);
     const componentRef = applicationRef.components[0];
     // allows to run `ng.profiler.timeChangeDetection();`
     enableDebugTools(componentRef);
   })
   .catch(err => console.log(err));


dans la console : 
 ng.profiler.timeChangeDetection()
 You can also record the CPU profile during these checks to analyze them with ng.profiler.timeChangeDetection({ record: true }).

Change detection strategies
When we explained how Angular detects the changes in your application, we showed the tree of components and said that Angular starts by checking the root component, then its children, then its grand-children, until all components are checked. Then all the necessary DOM updates are applied in one batch.

But you may be wondering if it is a very good idea to check every component on every change. And you’re right, that’s often not really necessary.


Stacblitz 

https://stackblitz.com/edit/angular-cd-pp?file=src%2Fapp%2Fhello.component.ts
https://stackblitz.com/edit/angular-cd-pp-2?file=src%2Fapp%2Fcolor.service.ts
https://stackblitz.com/edit/angular-cd-pp-3
