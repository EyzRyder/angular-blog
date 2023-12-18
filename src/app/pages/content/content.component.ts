import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/placeholderData';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  host: {
    '[sandbox]': `'allow-scripts'`,
    '[attr.sandbox]': `'allow-scripts'`,
  }
})
export class ContentComponent {
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  url: string|SafeUrl= ""
  isVideo: boolean = false
  sunImg: string = ""
  private id: string | null = "0"
  private sanitizer = inject(DomSanitizer)

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }
  getUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(result.url)
    this.sunImg = result.sunImg
    this.isVideo = result.url.includes('youtube')
  }

}
