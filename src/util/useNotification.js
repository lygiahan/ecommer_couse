import React from 'react';
import { notification } from 'antd';

export default function useNotification(data) {
    let notifi = notification.success({
        message: `${data} Thành công`,
        duration: 2,
        data,
    });

    return notifi;
}