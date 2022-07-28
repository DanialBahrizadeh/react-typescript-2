import StatusModel from "../model/StatusModel";
interface StatusProps {
  status: StatusModel;
}

const Status: React.FunctionComponent<StatusProps> = (props) => {
  let msg: string | null = null;

  if (props.status === StatusModel.loading) {
    msg = "loading...";
  } else if (props.status === StatusModel.done) {
    msg = "Data fetched successfully! ";
  } else if (props.status === StatusModel.error) {
    msg = "Error fetching data";
  } else {
    msg = "Unknown Status";
  }

  return <div>{msg}</div>;
};

export default Status;
