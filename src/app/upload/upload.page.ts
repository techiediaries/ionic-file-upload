import { Component, OnInit } from '@angular/core';

import { UploadingService } from '../uploading.service';

import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { concat } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {



  public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;


  constructor(private uploadingService: UploadingService) { }

  ngOnInit() {
  }
  
  fileOverBase(event): void {
    this.hasBaseDropZoneOver = event;
  }

  getFiles(): FileLikeObject[] {
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;

    });
  }
  



  uploadFiles() {
   

    let files = this.getFiles();
    let requests = [];
    console.log("files", files);
    files.forEach((file) => {
      let formData = new FormData();
      formData.append('file' , file.rawFile, file.name);
      requests.push(this.uploadingService.uploadFormData(formData));
      
    });
 
    concat(...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {  
        console.log(err);
      }
    );
  }

}
