import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import { TuiDataListWrapper, TuiStringifyContentPipe } from '@taiga-ui/kit';
import { TextEditorComponent } from "../text-editor/text-editor.component";

@Component({
  selector: 'app-input-message',
  imports: [TuiDataListWrapper, TuiStringifyContentPipe,
    TuiDropdown, TuiIcon, TuiButton, TextEditorComponent],
  templateUrl: './input-message.component.html',
  styleUrl: './input-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputMessageComponent { 
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
}
