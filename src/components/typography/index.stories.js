import {h} from 'preact';
import {Mono, Sans} from './';

export default {
  title: 'Typography'
};

const FIXTURE = {};

export const Main = () => {
  return (
    <div className="flex p-24">
      <div className="mr-64">
        <h2 className={'text-2xl mb-12 font-mono'}>Mono</h2>
        {
          Object.entries(Mono).map(([key, val]) => (
              <div>
                <p className={'underline text-bold text-red-500'}>{'...Mono.' + key}</p>
                <p className={val}>Lorem ipsum</p>
              </div>
            )
          )
        }
      </div>
      <div>
        <h2 className={'text-2xl mb-12 font-body'}>Sans</h2>
        {Object.entries(Sans).map(([key, val]) => (
            <div>
              <p className={'underline text-bold text-red-500'}>{'...Sans.' + key}</p>
              <p className={val}>Lorem ipsum</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
