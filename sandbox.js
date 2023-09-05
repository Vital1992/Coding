// Find index of the block which has less steps to all buildings (gym, school, store: should be true to exists)
// In below example answer will be 3 because it's 1 step up and 1 step down to reach all buildings

const blocks = [
    {
        gym: false,
        school: true,
        store: false,
    },
    {
        gym: true,
        school: false,
        store: false,
    },
    {
        gym: true,
        school: true,
        store: false,
    },
    {
        gym: false,
        school: true,
        store: false,
    },
    {
        gym: false,
        school: true,
        store: true,
    }
] // 3

// const blocks = [
//     {
//         gym: false,
//         school: false,
//         store: false,
//     },
//     {
//         gym: true,
//         school: false,
//         store: false,
//     },
//     {
//         gym: false,
//         school: true,
//         store: false,
//     },
//     {
//         gym: false,
//         school: false,
//         store: true,
//     },
//     {
//         gym: false,
//         school: false,
//         store: false,
//     }
// ] // 2

// const blocks = [
//     {
//         gym: true,
//         school: false,
//         store: false,
//     },
//     {
//         gym: false,
//         school: false,
//         store: false,
//     },
//     {
//         gym: false,
//         school: false,
//         store: false,
//     },
//     {
//         gym: false,
//         school: true,
//         store: true,
//     },
//     {
//         gym: false,
//         school: false,
//         store: false,
//     }
// ] // 2

const reqs = ['gym', 'school', 'store']

function listReqs(reqs, block) {
    let reqsToRemove = []
    for (let i = 0; i < reqs.length; i++) {
        if (block[reqs[i]]) {
            reqsToRemove.push(reqs[i])
        }
    }
    return reqsToRemove
}

function findSteps (reqs, blocks) {
    let tempReqs = [...reqs]
        for (let i = 0; i < blocks.length; i++) {
            const reqsToRemove = listReqs(tempReqs, blocks[i])
            if (reqsToRemove.length > 0) {
                reqsToRemove.forEach(cur => {
                    tempReqs.splice(tempReqs.indexOf(cur), 1)
                })
            }
            if (tempReqs.length === 0) {
                return i
            }
        }
        return -1
}

function findBestBlock (reqs, blocks) {
    const tempBlocks = [...blocks]
    const steps = []
    let toReturn = -1

    for (let i = 0; i < blocks.length; i++) {
        steps.push([i, findSteps(reqs, tempBlocks) !== -1 ? findSteps(reqs, tempBlocks) + i : findSteps(reqs, tempBlocks)])
        tempBlocks.shift()
    }

    let minDiff = Number.POSITIVE_INFINITY
    let minDiffIdx = -1
    for (let i = 0; i < steps.length; i++) {
        if (steps[i][1] !== -1 && Math.abs(steps[i][0] - steps[i][1]) < minDiff) {
            minDiff = Math.abs(steps[i][0] - steps[i][1])
            minDiffIdx = i
        }
    }
    const lookingRange = steps[minDiffIdx]

    const finalIdxs = []
    for (let i = lookingRange[0] + 1; i < blocks.length; i++) {
        finalIdxs.push(i)
        if (i === lookingRange[1] - 1) {
            break;
        }
    }

    if (finalIdxs.length > 1) {
        const findMiddle = Math.floor(finalIdxs.length / 2)
        toReturn = finalIdxs[findMiddle]
    } else {
        toReturn = finalIdxs[0]
    }

    return toReturn
}

console.log(findBestBlock(reqs, blocks))