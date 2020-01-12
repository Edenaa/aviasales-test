import React from 'react';
import withStores from '~/hocs/withStores';
import styles from './TicketsItem.module.scss';
import preloader from '~/img/preloader.gif';

class ToggleList extends React.Component {
  render() {
    let ticketItemOrigin = this.props.stores.tickets;
    let ticketItem;
    if(this.props.stores.filters.tickets) {
      ticketItem = this.props.stores.filters;
    } else {
      ticketItem = this.props.stores.tickets;
    }
    let ticketRows = ticketItem.tickets.map((ticket, i) => {

      let ticketSegments = ticket.segments.map((segment, i) => {
        let timeOrigin = ticketItemOrigin.timeConvertOrigin(segment.date)
        let timeDestination = ticketItemOrigin.timeConvertDestination(segment.date, segment.duration);
        let duration = ticketItemOrigin.timeConvertDuration(segment.duration);
        let stops = segment.stops;
        let letter = ticketItemOrigin.num2str(stops.length, ['пересадка', 'пересадки', 'пересадок'])
        return(
          <div className={styles.ticketsRow} key={i}>
            <div className={styles.ticketsCol}>
              <p className={styles.ticketsColHeader}>{segment.origin} – {segment.destination}</p>
              <p className={styles.ticketsColBody}>{timeOrigin} – {timeDestination}</p>
            </div>
            <div className={styles.ticketsCol}>
              <p className={styles.ticketsColHeader}>В пути</p>
              <p className={styles.ticketsColBody}>{duration}</p>
            </div>
            <div className={styles.ticketsCol}>
              <p className={styles.ticketsColHeader}>{stops.length} {letter}</p>
              <p className={styles.ticketsColBody}>{stops.join(', ')}</p>
            </div>
          </div>
        )
      })

      return (
        <div key={i} className={styles.ticketsItem}>
          <div className={styles.ticketsHeader}>
            <p className={styles.ticketsSum}>{ticket.price} P</p>
            <img src={`http://pics.avs.io/99/36/${ticket.carrier}.png`} className={styles.ticketsImg}/>
          </div>
          <div className={styles.ticketsBody}>
            {ticketSegments}
          </div>
        </div>
      )
    })

    return (
      <React.Fragment>
          <div className={styles.ticketsList} id="ticketsList">
            {!ticketItemOrigin.tickets.length ? 
              <div className={styles.beforeLoad} id="beforeLoad">
                <img src={preloader}/>
              </div>
              : 
              <div>
                {ticketRows.slice(0, ticketItemOrigin.currentTickets+5)}
                <button className={styles.buttonMore} onClick={() => ticketItemOrigin.slices()}>Показать еще</button>
              </div>
            }
          </div>
      </React.Fragment>
    )
  }
}
export default withStores(ToggleList);