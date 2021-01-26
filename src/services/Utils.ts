interface IRequest {
  resource: any;
  id: any;
  verb: any;
}

const Utils: any= {
  parseRequestURL : () => {
    let url: string = location.hash.slice(1).toLowerCase() || "/";
    let r: any = url.split("/");
    let request: IRequest = {
      resource: null,
      id: null,
      verb: null,
    };
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];

    return request;
  },
};

export default Utils;
