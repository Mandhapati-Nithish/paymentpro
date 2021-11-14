import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profiles/services/profile.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: string;
  profileStatus: string;
  profileDetail:any = {}

  constructor(private profileService: ProfileService,private router: Router) { }
 
  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('userDetails') || '').name;
    this.profileService.getProfile().subscribe(
      (res) => { console.log(JSON.stringify(res));
      this.profileDetail=res.experience;},
      (err: any)=>{
        this.profileStatus = err.noprofile;
      }
    );
  }
    createProfileButtonClick(){
        this.router.navigate(['/profiles/create-profile']);
    }
    deleteExep(expId: string){
      this.profileService.deleteExperience(expId).subscribe((res)=>{ //this.router.navigate(['/dashboard']);
      this.profileDetail=res;});
    }
}
