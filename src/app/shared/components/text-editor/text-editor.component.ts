import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
  TuiBoldButtonTool,
  TuiEditor,
  TuiItalicButtonTool,
  TuiUnderlineButtonTool,
  TuiStrikeButtonTool,
  provideTuiEditor,
} from '@taiga-ui/editor';

@Component({
  selector: 'app-text-editor',
  imports: [ReactiveFormsModule,
        TuiEditor,
        TuiBoldButtonTool,
        TuiItalicButtonTool,
        TuiUnderlineButtonTool,
        TuiStrikeButtonTool
      ],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
        provideTuiEditor({
            placeholder: {placeholder: 'Message...'},
        }),
    ],
})
export class TextEditorComponent {

  protected readonly control = new FormControl('');
  protected readonly builtInTools = [];

 }
