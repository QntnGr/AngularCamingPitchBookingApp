import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'replaceLinks'
})

export class ReplaceLinksPipe implements PipeTransform {
  transform(value: string): string {
    const urlRegex = /https?:\/\/[^\s<]+/g;
    const links = value.match(urlRegex) || [];
    let result = value;
    links.forEach(element => {
        result = result.replace(element, 
            "<a class=\"link\"  target=\"_blank\" href=\"" + element + "\">" + element.replace("https://", "") + "</a>");
    });
    return result;
  }
}