import { Routes } from '@angular/router';
import { PortfolioMainComponent } from '../portfolio/portfolio.component';
import { AboutMeComponent } from '../portfolio/aboutme/aboutme.component';
import { SkillJavaComponent } from '../portfolio/skills/java/java.component';
import { SkillsComponent } from '../portfolio/skills/skills.component';
import { SkillWebComponent } from '../portfolio/skills/web/web.component';
import { SkillSqlComponent } from '../portfolio/skills/sql/sql.component';

export const routes: Routes = [

    // these 2 redirections might be temporary (as I'll add more stuff to the website)
    // basically an url that empty or just "/Portfolio" redirects to the "About Me" page of my portfolio
    { path: '', redirectTo: '/Portfolio/AboutMe', pathMatch: 'full' }, 
    { path: 'Portfolio', redirectTo: '/Portfolio/AboutMe', pathMatch: 'full' },

    { 
        path: 'Portfolio', 
        component: PortfolioMainComponent,
        children: [

            { path: 'AboutMe', component: AboutMeComponent },
            { path: 'Skills', component: SkillsComponent, children: [

                { path: 'Java', component: SkillJavaComponent },
                { path: 'Web', component: SkillWebComponent },
                { path: 'SQL', component: SkillSqlComponent }
            ]},
        ] 
    },  
];
