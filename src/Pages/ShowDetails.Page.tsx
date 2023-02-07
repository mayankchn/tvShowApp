import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { castLoadedAction } from "../actions/cast";
import { showDetailLoadedAction } from "../actions/showDetail";
import { showIdChangedAction } from "../actions/showId";
import { getCast, getShowDetail } from "../api";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { Cast, Show } from "../models";
import { castSelector } from "../selectors/cast";
import { showState } from "../selectors/showDetail";
import { State } from "../store";

type OwnProps = WithRouterProps

type ShowDetailPageProps = ReduxProps & OwnProps

const dummyImage = "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"

const dummySummary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const ShowDetailPage: FC<ShowDetailPageProps> = ({ showId, show, cast, showIdChanged }) => {

  useEffect(() => {
    showIdChanged(showId)
  }, [showId])

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
        <Link to="/" className="text-sm font-semibold tracking-wide underline">BACK HOME</Link>
      </div>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres?.map((genre, i) => {
          return (
            <GenrePill key={i} name={genre} />
          )
        }) || "unknown"}
      </div>
      <div className="mt-2 flex">
        <img
          src={show.image?.medium || show.image?.original || dummyImage}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML={{__html:show.summary || dummySummary}}></p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show.rating?.average || "unavailable"}</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          {cast.length ? cast.map((item, i) => {
            return (
              <CastCard
                key={i}
                avatarLink={item.image?.medium || item.image?.original || dummyImage}
                name={item.name}
              />
            )
          }) : <span>Unavailable</span>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  const id = +ownProps.params.showId;
  return {
    showId: id,
    show: showState(state),
    cast: castSelector(state),
  }
}

const mapDispatchToProps = {
  showIdChanged: showIdChangedAction,
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>
export default withRouter(connector(ShowDetailPage));
