export interface MemberInterface {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  emergencyContactNumber: string;
  emergencyContactEmailAddress: string;
  emergencyContactName: string;
  birthday: Date;
}

export interface FormValues {
  dateStart: Date;
  dateEnd: Date;
  leader: MemberInterface;
  members: MemberInterface[];
}
