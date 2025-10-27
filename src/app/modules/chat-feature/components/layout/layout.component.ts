import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TuiFilterPipe } from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiTitle,
  TuiScrollbar,
  TuiIcon,
  TUI_DARK_MODE,
  TuiButton,
  TuiDropdown,
  TuiTextfield
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBlock,
  TuiBadgeNotification,
  TuiDataListWrapper,
  TuiStringifyContentPipe,
  TuiFiles,
  TuiFileLike
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { InputMessageComponent } from "../../../../shared/components/input-message/input-message.component";
import { ChatContainer } from "../chat-container/chat-container";
@Component({
    selector: 'app-layout',
    imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiAppearance,
    TuiBlock,
    TuiTitle,
    TuiScrollbar,
    TuiIcon,
    TuiAvatar,
    TuiCell,
    TuiBadgeNotification,
    TuiFilterPipe,
    TuiTextfieldControllerModule,
    TuiDataListWrapper,
    TuiButton,
    TuiDropdown,
    TuiStringifyContentPipe,
    TuiFiles,
    InputMessageComponent,
    TuiTextfield,
    ChatContainer
],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    host: {}
})
export class LayoutComponent implements OnInit{

  protected value = 0;
  protected search = '';
  protected chatsearch = '';
  protected showChatSearch:boolean = false;
  protected readonly darkMode = inject(TUI_DARK_MODE);
  protected readonly control = new FormControl<TuiFileLike | null>(null);

  ngOnInit(): void {
    console.log(this.search, typeof this.search);
  }

  get searchValue(): string {
    return this.search || '';
  }

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
