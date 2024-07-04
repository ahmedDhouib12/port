import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent {
  @Output() formData = new EventEmitter<any>();

  aboutText: string = '';
  contactEmail: string = '';
  projectUrl: string = '';
  projectTitle: string = '';

  onSubmit() {
    const data = {
      aboutText: this.aboutText,
      contactEmail: this.contactEmail,
      projectUrl: this.projectUrl,
      projectTitle: this.projectTitle
    };
    this.formData.emit(data);
  }
}
