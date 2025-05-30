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
import { HomeComponent } from './features/home/home.component';
import { QAComponent } from './features/q-and-a/q-and-a.component';
import { ArticlesComponent } from './features/articles/articles.component';
import { ArticlesHubComponent } from './features/articles/hub/hub.component';
import { ArticlesArchMMAComponent } from './features/articles/articles/arch-mma/arch-mma.component';
import { SkillAngularComponent } from './features/portfolio/skills/angular/angular.component';
import { ProjectsStage2025Component } from './features/portfolio/projects/stage-2025/stage-2025.component';
import { ArticlesTypesOfTheoriesComponent } from './features/articles/articles/types-of-theories/types-of-theories.component';
import { ArticlesRomanticizingSocieties } from './features/articles/articles/romanticizing-societies/romanticizing-societies.component';
import { ArticlesLimitationsInFiction } from './features/articles/articles/limitations-in-ficiton/limitations-in-ficiton.component';
import { ArticlesSchoolAndCreativity } from './features/articles/articles/school-and-creativity/school-and-creativity.component';
import { ProjectsVirtualEnv } from './features/portfolio/projects/virtual-env/virtual-env.component';

export const routes: Routes = [

    
  { path: 'Portfolio', redirectTo: '/Portfolio/AboutMe', pathMatch: 'full' },

  { path: '', component: HomeComponent }, 

  { path: 'QA', component: QAComponent },

  { 
    path: 'Portfolio', 
    component: PortfolioMainComponent,
    children: [

      { path: 'AboutMe', component: AboutMeComponent },

      { path: 'Skills', component: SkillsComponent, children: [

        { path: 'Java', component: SkillJavaComponent },
        { path: 'Web', component: SkillWebComponent },
        { path: 'SQL', component: SkillSqlComponent },
        { path: 'Angular', component: SkillAngularComponent },

      ]},

      { path: 'Projects', component: ProjectsComponent, children: [

        { path: 'SaeTrains', component: ProjectsSaeTrainsComponent },
        { path: 'SaeS3', component: ProjectsSaeS3Component },
        { path: 'NDI2024', component: ProjectsNdi2024Component },
        { path: 'Stage2025', component: ProjectsStage2025Component },
        { path: 'EnvironnementVirtuel', component: ProjectsVirtualEnv },

      ]},

      { path: 'Info', component: InfoComponent, children: [

        { path: 'SAE', component: InfoSaeComponent },
        
      ]},
    ]
  },

  { 
    path: 'Articles', 
    component: ArticlesComponent,
    children: [

      { path: '', component: ArticlesHubComponent },
      { path: 'Arch_Linux_MMA', component: ArticlesArchMMAComponent },
      { path: 'Types_of_Theories', component: ArticlesTypesOfTheoriesComponent },
      { path: 'Fiction_And_Romanticizing_Societies', component: ArticlesRomanticizingSocieties },
      { path: 'Limitations_In_Fiction', component: ArticlesLimitationsInFiction },    
      { path: 'School_And_Creativity', component: ArticlesSchoolAndCreativity },
      
    ]
  },

];
