import { Routes } from '@angular/router';
import { PortfolioMainComponent } from '../portfolio/portfolio.component';
import { AboutMeComponent } from '../portfolio/aboutme/aboutme.component';
import { SkillJavaComponent } from '../portfolio/skills/java/java.component';
import { SkillsComponent } from '../portfolio/skills/skills.component';

export const routes: Routes = [
    { 
        path: 'Portfolio', 
        component: PortfolioMainComponent,
        children: [

            { path: 'AboutMe', component: AboutMeComponent },
            { path: 'Skills', component: SkillsComponent, children: [

                { path: 'Java', component: SkillJavaComponent }
            ]},
        ] 
    },  
];
