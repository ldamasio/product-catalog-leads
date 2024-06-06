import React from 'react';

const PhoneCallLink = () => {
    const { data, error } = useSWR(
        `/api/generatePhoneCallURL?number=${phoneNumber}`,
        fetcher,
    );

    if (error) return <div>Error generating phone call URL</div>;

    const phoneCallURL = data?.phoneCallURL;

    return (
        <a href={phoneCallURL} className="flex items-center justify-center gap-2">
            <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 5l6-3 6 3 1-1 4-4 2-2-3.5-3.5-1-1-4-4-2-2-3 3-2 2-1 1Z" />
            </svg>
            <span>Ligue 0800</span>
        </a>
    );
};

export default PhoneCallLink;
