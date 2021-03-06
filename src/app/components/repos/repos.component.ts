import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repoitems: any[] | undefined;
  repoName:string= "Grande-Pizarrie";

  constructor(private profileService: ProfileService) { 
    
  }

  findRepo () {
    this.profileService.UpdateRepo(this.repoName);
    this.profileService.searchrepos().subscribe(repo => {
      // console.log(repo["items"]);
      this.repoitems = this.repoitems;
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }

}
