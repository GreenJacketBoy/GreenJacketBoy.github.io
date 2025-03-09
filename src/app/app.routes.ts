import { Routes } from '@angular/router';
import { PortfolioMainComponent } from './features/portfolio/portfolio.component';
import { AboutMeComponent } from './features/portfolio/aboutme/aboutme.component';
import { SkillJavaComponent } from './features/portfolio/skills/java/java.component';
import { SkillsComponent } from './features/portfolio/skills/skills.component';
import { SkillWebComponent } from './features/portfolio/skills/web/web.component';
import { SkillSqlComponent } from './features/portfolio/skills/sql/sql.component';
import { ProjectsComponent } from './features/portfolio/projects/projects.component';
import { ProjectsSaeTrainsComponent } from './features/portfolio/projects/sae-trains/sae-trains.component';
import { ProjectsNdi2024Component } from './features/portfolio/projects/ndi-2024/ndi-2024.component';
import { ProjectsSaeS3Component } from './features/portfolio/projects/sae-s3/sae-s3.component';
import { InfoComponent } from './features/portfolio/info/info.component';
import { InfoSaeComponent } from './features/portfolio/info/sae/sae.component';

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

            { path: 'Projects', component: ProjectsComponent, children: [

                { path: 'SaeTrains', component: ProjectsSaeTrainsComponent },
                { path: 'SaeS3', component: ProjectsSaeS3Component },
                { path: 'NDI2024', component: ProjectsNdi2024Component }
            ]},

            { path: 'Info', component: InfoComponent, children: [
                { path: 'SAE', component: InfoSaeComponent }
            ]}
        ] 
    },  
];
