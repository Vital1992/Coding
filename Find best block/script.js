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
    // Go thru reqs and remove reqs from arr when it's found in the block
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
                // Remove reqs from tempArr
                reqsToRemove.forEach(cur => {
                    tempReqs.splice(tempReqs.indexOf(cur), 1)
                })
            }
            // When tempReq is empty return index which will show how many steps we made to find all needed reqs
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
        // Push starting block and steps to the block to get all reqs
        steps.push([i, findSteps(reqs, tempBlocks) !== -1 ? findSteps(reqs, tempBlocks) + i : findSteps(reqs, tempBlocks)])
        // Remove the first block on every iteration
        tempBlocks.shift()
    }

    console.log(steps)
    // Now in steps we have all ranges from the block with index 0 to the block N
    // that we need to go to to gather all reqs

    // Find the minimun difference between start block and end block
    let minDiff = Number.POSITIVE_INFINITY
    let minDiffIdx = -1
    for (let i = 0; i < steps.length; i++) {
        if (steps[i][1] !== -1 && Math.abs(steps[i][0] - steps[i][1]) < minDiff) {
            minDiff = Math.abs(steps[i][0] - steps[i][1])
            minDiffIdx = i
        }
    }
    // Find the most optimal start and end block
    const lookingRange = steps[minDiffIdx]

    const finalIdxs = []
    for (let i = lookingRange[0] + 1; i < blocks.length; i++) {
        // i will be the next block after the staring one
        finalIdxs.push(i)
        
        // And run until we reach the last block
        if (i === lookingRange[1] - 1) {
            break;
        }
    }

    // If there're multiple points between start and and block, find the middle
    if (finalIdxs.length > 1) {
        const findMiddle = Math.floor(finalIdxs.length / 2)
        toReturn = finalIdxs[findMiddle]
    } else {
        toReturn = finalIdxs[0]
    }

    return toReturn
}

console.log(findBestBlock(reqs, blocks))