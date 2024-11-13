import { Component } from '@angular/core';
import {TuiRepeatTimes, TuiStringHandler, TuiThemeColorService} from '@taiga-ui/cdk';
import { TuiAppearance, TuiTitle, TuiScrollbar, TuiIcon } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ TuiAppearance,TuiCardLarge,TuiRepeatTimes,TuiHeader,TuiTitle,TuiScrollbar,TuiBadge,TuiIcon],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
