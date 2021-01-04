import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'me cu';
  description = 'Enaldo';
  url="data:image/jpeg;base64,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"

}
