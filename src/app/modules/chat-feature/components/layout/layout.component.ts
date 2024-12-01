import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  TuiRepeatTimes,
  TuiStringHandler,
  TuiThemeColorService,
  TuiFilterPipe
} from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiTitle,
  TuiScrollbar,
  TuiIcon,
  TuiSurface,
  TUI_DARK_MODE,
  TuiButton,
  TuiDropdown
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBlock,
  TuiBadgeNotification,
  TuiDataListWrapper,
  TuiStringifyContentPipe,
  TuiFiles,
  TuiFileLike
} from '@taiga-ui/kit';
import {
  TuiCardLarge,
  TuiCardMedium,
  TuiCell,
  TuiHeader,
  TuiNavigation,
} from '@taiga-ui/layout';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
@Component({
    selector: 'app-layout',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgIf,
        TuiAppearance,
        TuiSurface,
        TuiBlock,
        TuiRepeatTimes,
        TuiHeader,
        TuiTitle,
        TuiScrollbar,
        TuiBadge,
        TuiIcon,
        TuiAvatar,
        TuiCardLarge,
        TuiCardMedium,
        TuiCell,
        TuiBadgeNotification,
        TuiFilterPipe,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapper,
        TuiButton,
        TuiDropdown,
        TuiStringifyContentPipe,
        TuiFiles,
        AsyncPipe,
        JsonPipe
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    host: {}
})
export class LayoutComponent {
  protected value = 0;
  protected search = '';
  protected chatsearch = '';
  protected showChatSearch:boolean = false;
  protected readonly darkMode = inject(TUI_DARK_MODE);
  protected readonly control = new FormControl<TuiFileLike | null>(null);

  protected readonly users:string[] = [
    "John Cleese",
    "Eric Idle",
    "Michael Palin",
    "Graham Chapman",
    "Terry Gilliam",
    "Terry Jones",
    "Gilliam Michael"
  ]

  protected readonly items = [
    {
        icon: '@tui.phone',
        name:  'Call now',
    },
    {
        icon: '@tui.star',
        name: 'Add to favorites',
    },
    {
        icon: '@tui.trash',
        name: 'Remove item',
    },
  ];

  protected readonly matcher = (item: string, search: string): boolean =>
    item.toLocaleLowerCase().includes(search.toLocaleLowerCase());

  protected readonly stringify = (item: {name: string; icon: string}): string => `${item.name}`;
  
  menu(item:any){
    console.log(item);
  }

  focusedChange(isFocused:boolean){
    if (!isFocused) {
      this.showChatSearch = false;
    }
    console.log(isFocused);
  }

  protected removeFile(): void {
    this.control.setValue(null);
  }

}
