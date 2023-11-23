import {Violation} from "./violation.model";
import {Moment} from "moment";

export class Fine {
  constructor(
    public id?: number,
    public active  ?: boolean,
    public computed  ?: boolean,
    public licensePlate?: string,
    public latitude?: number,
    public createdAt?: Moment,
    public longitude?: number,
    public trafficViolations?: Violation[],
    public imageUrl?: string
  ) {
  }
}


