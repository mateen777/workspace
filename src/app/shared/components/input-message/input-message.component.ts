import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TUI_DARK_MODE, TuiButton, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import { TuiDataListWrapper, TuiStringifyContentPipe } from '@taiga-ui/kit';
import { TextEditorComponent } from "../text-editor/text-editor.component";
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-input-message',
  imports: [TuiDataListWrapper, TuiStringifyContentPipe,
    TuiDropdown, TuiIcon, TuiButton, TextEditorComponent, PickerComponent],
  templateUrl: './input-message.component.html',
  styleUrl: './input-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputMessageComponent { 
  protected readonly darkMode = inject(TUI_DARK_MODE);
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

  protected readonly stringify = (item: {name: string; icon: string}): string => `${item.name}`;

  menu(item:any){
    console.log(item);
  }

  addEmoji(event: any) {
    console.log(event);
  }
}
