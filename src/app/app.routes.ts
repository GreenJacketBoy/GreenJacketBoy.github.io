import { Routes } from '@angular/router';
import { PortfolioMainComponent } from '../portfolio/main-template/main-template.component';
import { AboutMeComponent } from '../portfolio/aboutme/aboutme.component';
import { SkillJavaComponent } from '../portfolio/skills/java/java.component';

export const routes: Routes = [
    { 
        path: 'Portfolio', 
        component: PortfolioMainComponent,
        children: [

            { path: 'AboutMe', component: AboutMeComponent },
            { path: 'Java', component: SkillJavaComponent },
        ] 
    },  
];
