import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Moment} from 'moment';

@Pipe({
  name: 'dateMoment',
  pure: false
})
export class DateMomentPipe extends DatePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) locale: string) {
    super(locale, null);
  }

  // @ts-ignore
  transform(value: Moment | string | null | undefined, format?: string, timezone?: string, locale?: string): string | null {
    return super.transform(typeof value === 'string' ? value : value?.toISOString(), format, timezone, locale);
  }

}
