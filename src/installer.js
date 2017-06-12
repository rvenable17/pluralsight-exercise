/**
 * Created by regina on 6/10/2017.
 */
import {PACKAGELIST_REQUIRED_MSG} from './constants';

const InstallException = function (message) {
    this.message = message;
    this.name = 'InstallException';
};

export const install = (packageList) => {
    if (!packageList) {
        throw new InstallException(PACKAGELIST_REQUIRED_MSG);
    }
};

