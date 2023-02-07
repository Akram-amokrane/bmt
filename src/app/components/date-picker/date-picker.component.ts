import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment } from 'moment';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMMM/YYYY',
  },
  display: {
    dateInput: 'MMMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'MMMM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: "fr" },
  ],
})
export class DatePickerComponent implements OnInit {

  date = new FormControl(moment().month(1).year(2022));

  @Input() label?: string;
  @Input() init: string = "2022-01-01"
  @Input() min?: string;
  @Input() max?: string;
  @Output() value = new EventEmitter<string>()

  ngOnInit(): void {
    var d = this.init?.split("/")
    this.date.patchValue(moment().month(parseInt(d[0]) - 1).year(parseInt(d[1])))
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue!.year(normalizedYear.year());
    this.date.setValue(ctrlValue);

  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue!.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
    this.value.emit(`${ctrlValue?.year()}-${ctrlValue?.month()! + 1}-01`)
  }


}
