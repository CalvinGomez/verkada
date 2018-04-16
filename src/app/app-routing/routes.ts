import { Routes } from '@angular/router';

import { ThumbnailsComponent } from '../thumbnails/thumbnails.component';

export const routes: Routes = [
	{
		path 		: 'thumbnails',
		component 	: ThumbnailsComponent
	},
	{
		path 		: '',
		redirectTo 	: '/thumbnails',
		pathMatch 	: 'full'
	}
]