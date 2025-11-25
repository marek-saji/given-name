function unique (arr)
{
    return [...new Set(arr)];
}


module.exports = (...hypo) => hypo.reduce(
    (carry, rows) => {
        rows.forEach(row => {
            for (const name of row)
            {
                // FIXME Some names added with “/” are not unique
                //       (e.g. Polly in English) and with this in place
                //       will be groupped together
                const aliasIdx = carry.findIndex(carryRow => carryRow.includes(name));
                if (aliasIdx !== -1)
                {
                    carry[aliasIdx] = unique(carry[aliasIdx].concat(row));
                    return;
                }
            }

            carry.push(row);
        });
        return carry;
    },
    []
);
