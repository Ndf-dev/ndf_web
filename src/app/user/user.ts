export class User {
  id: string;
  constructor(public firstName ='',
  public otherNames = '',
  public telephone = '',
  public profilePic ='',
  public type = '',
  public companyCode = '',
  public password?: string) {}
}
