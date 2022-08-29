// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      6: [ctc0, ctc1, ctc0, ctc1, ctc1],
      8: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      10: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v299 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v300 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v299, v300],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v300, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v304, v305], secs: v307, time: v306, didSend: v31, from: v303 } = txn1;
      
      sim_r.txns.push({
        amt: v305,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v316 = stdlib.safeAdd(v306, v304);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v304, v305], secs: v307, time: v306, didSend: v31, from: v303 } = txn1;
  ;
  const v316 = stdlib.safeAdd(v306, v304);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v316],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v303, v304, v305, v316],
      evt_cnt: 0,
      funcNum: 2,
      lct: v306,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v508, time: v507, didSend: v267, from: v506 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v303,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v508, time: v507, didSend: v267, from: v506 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:39:29:application',
      fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:51:61:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v321, time: v320, didSend: v41, from: v319 } = txn2;
    const v323 = stdlib.safeAdd(v305, v305);
    ;
    let v324 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    let v325 = stdlib.checkedBigNumberify('./index.rsh:53:33:decimal', stdlib.UInt_max, '0');
    let v326 = v320;
    let v333 = v323;
    
    while (await (async () => {
      const v341 = stdlib.eq(v324, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      
      return v341;})()) {
      const v348 = stdlib.safeAdd(v326, v304);
      const v352 = stdlib.protect(ctc1, await interact.pickAndGuess(), {
        at: './index.rsh:58:65:application',
        fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
        msg: 'pickAndGuess',
        who: 'Alice'
        });
      const v353 = v352[stdlib.checkedBigNumberify('./index.rsh:58:65:application', stdlib.UInt_max, '0')];
      const v354 = v352[stdlib.checkedBigNumberify('./index.rsh:58:65:application', stdlib.UInt_max, '1')];
      const v357 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:59:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v358 = stdlib.digest(ctc2, [v357, v353]);
      const v360 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:61:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v361 = stdlib.digest(ctc2, [v360, v354]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v303, v304, v319, v333, v348, v358, v361],
        evt_cnt: 2,
        funcNum: 4,
        lct: v326,
        onlyIf: true,
        out_tys: [ctc3, ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:64:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v364, v365], secs: v367, time: v366, didSend: v77, from: v363 } = txn3;
          
          ;
          const v375 = stdlib.safeAdd(v366, v304);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v348],
        tys: [ctc5, ctc0, ctc5, ctc0, ctc0, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v303, v304, v319, v333, v348],
          evt_cnt: 0,
          funcNum: 5,
          lct: v326,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v462, time: v461, didSend: v213, from: v460 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v319,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc5, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v462, time: v461, didSend: v213, from: v460 } = txn4;
        ;
        const v463 = stdlib.addressEq(v303, v460);
        const v464 = stdlib.addressEq(v319, v460);
        const v465 = v463 ? true : v464;
        stdlib.assert(v465, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:64:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:39:29:application',
          fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:64:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v364, v365], secs: v367, time: v366, didSend: v77, from: v363 } = txn3;
        ;
        const v368 = stdlib.addressEq(v303, v363);
        stdlib.assert(v368, {
          at: './index.rsh:64:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v375 = stdlib.safeAdd(v366, v304);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v375],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v303, v304, v319, v333, v364, v365, v375],
            evt_cnt: 0,
            funcNum: 7,
            lct: v366,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v444, time: v443, didSend: v179, from: v442 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v303,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc5, ctc0, ctc5, ctc0, ctc3, ctc3, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v444, time: v443, didSend: v179, from: v442 } = txn5;
          ;
          const v445 = stdlib.addressEq(v303, v442);
          const v446 = stdlib.addressEq(v319, v442);
          const v447 = v445 ? true : v446;
          stdlib.assert(v447, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:72:82:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc4, await interact.informTimeout(), {
            at: './index.rsh:39:29:application',
            fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:72:82:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v385, v386], secs: v388, time: v387, didSend: v92, from: v384 } = txn4;
          ;
          const v389 = stdlib.addressEq(v319, v384);
          stdlib.assert(v389, {
            at: './index.rsh:72:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v396 = stdlib.safeAdd(v387, v304);
          const txn5 = await (ctc.sendrecv({
            args: [v303, v304, v319, v333, v364, v365, v385, v386, v396, v353, v354, v357, v360],
            evt_cnt: 4,
            funcNum: 8,
            lct: v387,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:81:7:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v401, v402, v403, v404], secs: v406, time: v405, didSend: v104, from: v400 } = txn5;
              
              ;
              const v412 = stdlib.safeAdd(v401, v385);
              const v413 = stdlib.eq(v412, v402);
              const v414 = stdlib.eq(v412, v386);
              const v415 = v414 ? false : true;
              const v416 = v413 ? v415 : false;
              const v419 = v413 ? false : true;
              const v420 = v414 ? v419 : false;
              const v421 = v420 ? stdlib.checkedBigNumberify('./index.rsh:12:88:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:12:92:decimal', stdlib.UInt_max, '2');
              const v422 = v416 ? stdlib.checkedBigNumberify('./index.rsh:12:47:decimal', stdlib.UInt_max, '1') : v421;
              const cv324 = v422;
              const cv325 = v412;
              const cv326 = v405;
              const cv333 = v333;
              
              await (async () => {
                const v324 = cv324;
                const v325 = cv325;
                const v326 = cv326;
                const v333 = cv333;
                
                if (await (async () => {
                  const v341 = stdlib.eq(v324, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  
                  return v341;})()) {
                  const v348 = stdlib.safeAdd(v326, v304);
                  sim_r.isHalt = false;
                  }
                else {
                  const v478 = stdlib.eq(v324, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  if (v478) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v303,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v319,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v396],
            tys: [ctc5, ctc0, ctc5, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v303, v304, v319, v333, v364, v365, v385, v386, v396],
              evt_cnt: 0,
              funcNum: 9,
              lct: v387,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v426, time: v425, didSend: v145, from: v424 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v319,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc5, ctc0, ctc5, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v426, time: v425, didSend: v145, from: v424 } = txn6;
            ;
            const v427 = stdlib.addressEq(v303, v424);
            const v428 = stdlib.addressEq(v319, v424);
            const v429 = v427 ? true : v428;
            stdlib.assert(v429, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:81:108:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc4, await interact.informTimeout(), {
              at: './index.rsh:39:29:application',
              fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:81:108:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v401, v402, v403, v404], secs: v406, time: v405, didSend: v104, from: v400 } = txn5;
            ;
            const v407 = stdlib.addressEq(v303, v400);
            stdlib.assert(v407, {
              at: './index.rsh:81:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v408 = stdlib.digest(ctc2, [v403, v401]);
            const v409 = stdlib.digestEq(v364, v408);
            stdlib.assert(v409, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:82:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v410 = stdlib.digest(ctc2, [v404, v402]);
            const v411 = stdlib.digestEq(v365, v410);
            stdlib.assert(v411, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:83:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v412 = stdlib.safeAdd(v401, v385);
            const v413 = stdlib.eq(v412, v402);
            const v414 = stdlib.eq(v412, v386);
            const v415 = v414 ? false : true;
            const v416 = v413 ? v415 : false;
            const v419 = v413 ? false : true;
            const v420 = v414 ? v419 : false;
            const v421 = v420 ? stdlib.checkedBigNumberify('./index.rsh:12:88:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:12:92:decimal', stdlib.UInt_max, '2');
            const v422 = v416 ? stdlib.checkedBigNumberify('./index.rsh:12:47:decimal', stdlib.UInt_max, '1') : v421;
            const cv324 = v422;
            const cv325 = v412;
            const cv326 = v405;
            const cv333 = v333;
            
            v324 = cv324;
            v325 = cv325;
            v326 = cv326;
            v333 = cv333;
            
            continue;}
          
          }
        
        }
      
      }
    const v478 = stdlib.eq(v324, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v478) {
      ;
      stdlib.protect(ctc4, await interact.declareWinner(v324, v325), {
        at: './index.rsh:94:27:application',
        fs: ['at ./index.rsh:93:7:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)'],
        msg: 'declareWinner',
        who: 'Alice'
        });
      
      return;
      }
    else {
      ;
      stdlib.protect(ctc4, await interact.declareWinner(v324, v325), {
        at: './index.rsh:94:27:application',
        fs: ['at ./index.rsh:93:7:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)'],
        msg: 'declareWinner',
        who: 'Alice'
        });
      
      return;
      }}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v304, v305], secs: v307, time: v306, didSend: v31, from: v303 } = txn1;
  ;
  const v316 = stdlib.safeAdd(v306, v304);
  stdlib.protect(ctc1, await interact.acceptWager(v305), {
    at: './index.rsh:50:25:application',
    fs: ['at ./index.rsh:50:25:application call to [unknown function] (defined at: ./index.rsh:50:25:function exp)', 'at ./index.rsh:50:25:application call to "liftedInteract" (defined at: ./index.rsh:50:25:application)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v303, v304, v305, v316],
    evt_cnt: 0,
    funcNum: 1,
    lct: v306,
    onlyIf: true,
    out_tys: [],
    pay: [v305, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v321, time: v320, didSend: v41, from: v319 } = txn2;
      
      const v323 = stdlib.safeAdd(v305, v305);
      sim_r.txns.push({
        amt: v305,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v324 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v325 = stdlib.checkedBigNumberify('./index.rsh:53:33:decimal', stdlib.UInt_max, '0');
      const v326 = v320;
      const v333 = v323;
      
      if (await (async () => {
        const v341 = stdlib.eq(v324, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        
        return v341;})()) {
        const v348 = stdlib.safeAdd(v326, v304);
        sim_r.isHalt = false;
        }
      else {
        const v478 = stdlib.eq(v324, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v478) {
          sim_r.txns.push({
            kind: 'from',
            to: v303,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v319,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v316],
    tys: [ctc5, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v303, v304, v305, v316],
      evt_cnt: 0,
      funcNum: 2,
      lct: v306,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v508, time: v507, didSend: v267, from: v506 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v303,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v508, time: v507, didSend: v267, from: v506 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:39:29:application',
      fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:51:61:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v321, time: v320, didSend: v41, from: v319 } = txn2;
    const v323 = stdlib.safeAdd(v305, v305);
    ;
    let v324 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    let v325 = stdlib.checkedBigNumberify('./index.rsh:53:33:decimal', stdlib.UInt_max, '0');
    let v326 = v320;
    let v333 = v323;
    
    while (await (async () => {
      const v341 = stdlib.eq(v324, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      
      return v341;})()) {
      const v348 = stdlib.safeAdd(v326, v304);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v348],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v303, v304, v319, v333, v348],
          evt_cnt: 0,
          funcNum: 5,
          lct: v326,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v462, time: v461, didSend: v213, from: v460 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v319,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc5, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v462, time: v461, didSend: v213, from: v460 } = txn4;
        ;
        const v463 = stdlib.addressEq(v303, v460);
        const v464 = stdlib.addressEq(v319, v460);
        const v465 = v463 ? true : v464;
        stdlib.assert(v465, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:64:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:39:29:application',
          fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:64:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v364, v365], secs: v367, time: v366, didSend: v77, from: v363 } = txn3;
        ;
        const v368 = stdlib.addressEq(v303, v363);
        stdlib.assert(v368, {
          at: './index.rsh:64:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v375 = stdlib.safeAdd(v366, v304);
        const v379 = stdlib.protect(ctc3, await interact.pickAndGuess(), {
          at: './index.rsh:70:70:application',
          fs: ['at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
          msg: 'pickAndGuess',
          who: 'Bob'
          });
        const v380 = v379[stdlib.checkedBigNumberify('./index.rsh:70:70:application', stdlib.UInt_max, '0')];
        const v381 = v379[stdlib.checkedBigNumberify('./index.rsh:70:70:application', stdlib.UInt_max, '1')];
        
        const txn4 = await (ctc.sendrecv({
          args: [v303, v304, v319, v333, v364, v365, v375, v380, v381],
          evt_cnt: 2,
          funcNum: 6,
          lct: v366,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:72:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v385, v386], secs: v388, time: v387, didSend: v92, from: v384 } = txn4;
            
            ;
            const v396 = stdlib.safeAdd(v387, v304);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v375],
          tys: [ctc5, ctc0, ctc5, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v303, v304, v319, v333, v364, v365, v375],
            evt_cnt: 0,
            funcNum: 7,
            lct: v366,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v444, time: v443, didSend: v179, from: v442 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v303,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc5, ctc0, ctc5, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v444, time: v443, didSend: v179, from: v442 } = txn5;
          ;
          const v445 = stdlib.addressEq(v303, v442);
          const v446 = stdlib.addressEq(v319, v442);
          const v447 = v445 ? true : v446;
          stdlib.assert(v447, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:72:82:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:39:29:application',
            fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:72:82:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v385, v386], secs: v388, time: v387, didSend: v92, from: v384 } = txn4;
          ;
          const v389 = stdlib.addressEq(v319, v384);
          stdlib.assert(v389, {
            at: './index.rsh:72:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v396 = stdlib.safeAdd(v387, v304);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v396],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v303, v304, v319, v333, v364, v365, v385, v386, v396],
              evt_cnt: 0,
              funcNum: 9,
              lct: v387,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v426, time: v425, didSend: v145, from: v424 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v319,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc5, ctc0, ctc5, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v426, time: v425, didSend: v145, from: v424 } = txn6;
            ;
            const v427 = stdlib.addressEq(v303, v424);
            const v428 = stdlib.addressEq(v319, v424);
            const v429 = v427 ? true : v428;
            stdlib.assert(v429, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:81:108:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:39:29:application',
              fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:81:108:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v401, v402, v403, v404], secs: v406, time: v405, didSend: v104, from: v400 } = txn5;
            ;
            const v407 = stdlib.addressEq(v303, v400);
            stdlib.assert(v407, {
              at: './index.rsh:81:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v408 = stdlib.digest(ctc4, [v403, v401]);
            const v409 = stdlib.digestEq(v364, v408);
            stdlib.assert(v409, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:82:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v410 = stdlib.digest(ctc4, [v404, v402]);
            const v411 = stdlib.digestEq(v365, v410);
            stdlib.assert(v411, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:83:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v412 = stdlib.safeAdd(v401, v385);
            const v413 = stdlib.eq(v412, v402);
            const v414 = stdlib.eq(v412, v386);
            const v415 = v414 ? false : true;
            const v416 = v413 ? v415 : false;
            const v419 = v413 ? false : true;
            const v420 = v414 ? v419 : false;
            const v421 = v420 ? stdlib.checkedBigNumberify('./index.rsh:12:88:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:12:92:decimal', stdlib.UInt_max, '2');
            const v422 = v416 ? stdlib.checkedBigNumberify('./index.rsh:12:47:decimal', stdlib.UInt_max, '1') : v421;
            const cv324 = v422;
            const cv325 = v412;
            const cv326 = v405;
            const cv333 = v333;
            
            v324 = cv324;
            v325 = cv325;
            v326 = cv326;
            v333 = cv333;
            
            continue;}
          
          }
        
        }
      
      }
    const v478 = stdlib.eq(v324, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v478) {
      ;
      stdlib.protect(ctc1, await interact.declareWinner(v324, v325), {
        at: './index.rsh:94:27:application',
        fs: ['at ./index.rsh:93:7:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)'],
        msg: 'declareWinner',
        who: 'Bob'
        });
      
      return;
      }
    else {
      ;
      stdlib.protect(ctc1, await interact.declareWinner(v324, v325), {
        at: './index.rsh:94:27:application',
        fs: ['at ./index.rsh:93:7:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)'],
        msg: 'declareWinner',
        who: 'Bob'
        });
      
      return;
      }}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAPAAEISAIgBgqQAQUJoAFQMCgmAwEAAQEAIjUAMRhBBOkqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQkMQAJ0SYEHDEABc0kkDEABG0khCgxAAFYhChJEIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1coIDX/gASiBWaOsDIGNAMhC1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0IEAUghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf9JNQVJSiJbNf4kWzX9gRBbNfyBGFs1+4AEf6I7UjT+FlA0/RZQNPwWUDT7FlCwMgY0AyELWwxENP8xABJENANXUCA0/BY0/hZQARJENANXcCA0+xY0/RZQARJENP40AyEIWwhJNfo0/RI1+TT6NAOBmAFbEjX4NP80AyEFWzQDVyggIQQiNPg0+RQQTSM0+TT4FBBNNPoyBjQDJVtCAtVIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEIWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgLxSSEGDEAAo0gkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yEFWzX+VyggNf0lWzX8V1AgNftXcCA1+kk1BUkiWzX5JFs1+IAESiHL/DT5FlA0+BZQsDIGNAMhCFsMRDT9MQASRDIGNP4INfc0/zT+FlA0/VA0/BZQNPtQNPpQNPkWUDT4FlA09xZQKEsBVwB/ZylLAVd/KWdIIQc1ATIGNQJCAmNIIQY0ARJENARJIhJMNAISEUQoZEk1A1coIDX/gATMmZJcsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0IB90khBAxAANVJgQQMQACNSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQVbNf5XKCA1/SVbNfxJNQVJVwAgNftXICA1+oAEYF2kKzT7UDT6ULAyBjQDIQxbDEQ0/zEAEkQyBjT+CDX5NP80/hZQNP1QNPwWUDT7UDT6UDT5FlAoSwFXAH9nKUsBV38ZZ0gkNQEyBjUCQgF4IQQSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyEOW7III7IQNANXACCyB7NCARtJIwxAAEhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQ5bNf+ABJqLkXSwMgY0AyENWwxENP+IAVM0A1cAIDQDIQVbMQAhBCIyBjT/SQhCAF9IgaCNBogBMyI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULA0/ogBAzIGNP8INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAijX/Nf41/TX8Nfs1+jX5NPwhBBJBACs0/jT6CDX4NPk0+hZQNPtQNP8WUDT4FlAoSwFXAFhnSCEGNQEyBjUCQgBJNPwjEkEAE7EisgE0/7III7IQNPmyB7NCABOxIrIBNP+yCCOyEDT7sgezQgAAMRkhCRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v305",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v305",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v364",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v365",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v385",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v364",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v365",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v385",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001cbb38038062001cbb8339810160408190526200002691620002a4565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020808301510151620000a1903414600762000145565b602082015151620000b490439062000170565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013b9260029290910190620001c7565b5050505062000368565b816200016c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826200017f838262000304565b9150811015620001c15760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000163565b92915050565b828054620001d5906200032b565b90600052602060002090601f016020900481019282620001f9576000855562000244565b82601f106200021457805160ff191683800117855562000244565b8280016001018555821562000244579182015b828111156200024457825182559160200191906001019062000227565b506200025292915062000256565b5090565b5b8082111562000252576000815560010162000257565b604080519081016001600160401b03811182821017156200029e57634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002b857600080fd5b620002c26200026d565b835181526040601f1983011215620002d957600080fd5b620002e36200026d565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032657634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034057607f821691505b602082108114156200036257634e487b7160e01b600052602260045260246000fd5b50919050565b61194380620003786000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611522565b610197565b6100a16100e8366004611545565b61044e565b6100a16100fb366004611545565b6105e3565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611545565b610761565b34801561013457600080fd5b5061013d6108fc565b6040516100be929190611557565b6100a1610159366004611545565b610999565b6100a161016c3660046115b4565b610b30565b6100a161017f366004611545565b610e44565b6100a1610192366004611522565b610f9f565b6101a7600860005414601c6111e1565b6101c1813515806101ba57506001548235145b601d6111e1565b6000808055600280546101d3906115c6565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115c6565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061164f565b905061027c6040518060200160405280600081525090565b61028d8260c001514310601e6111e1565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be9291906116ed565b60405180910390a16102d23415601a6111e1565b60408201516102ed906001600160a01b03163314601b6111e1565b6102fb438360200151611207565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a080860151908401528581013560c08401528582013560e08401528351610100840152600a6000554360015590516104239183910181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906104479291906113db565b5050505050565b61045e60016000541460096111e1565b6104788135158061047157506001548235145b600a6111e1565b60008080556002805461048a906115c6565b80601f01602080910402602001604051908101604052809291908181526020018280546104b6906115c6565b80156105035780601f106104d857610100808354040283529160200191610503565b820191906000526020600020905b8154815290600101906020018083116104e657829003601f168201915b505050505080602001905181019061051b919061171e565b905061052e81606001514310600b6111e1565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161055f929190611797565b60405180910390a16105788160400151341460086111e1565b61058061145f565b815181516001600160a01b039091169052602080830151825182015281513360409182015281830180516002905280516000930192909252905143908201528201516105cc9080611207565b6020820151606001526105de8161125a565b505050565b6105f3600160005414600d6111e1565b61060d8135158061060657506001548235145b600e6111e1565b60008080556002805461061f906115c6565b80601f016020809104026020016040519081016040528092919081815260200182805461064b906115c6565b80156106985780601f1061066d57610100808354040283529160200191610698565b820191906000526020600020905b81548152906001019060200180831161067b57829003601f168201915b50505050508060200190518101906106b0919061171e565b90506106c48160600151431015600f6111e1565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106f5929190611797565b60405180910390a16107093415600c6111e1565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610746573d6000803e3d6000fd5b506000808055600181905561075d906002906114b8565b5050565b61077160066000541460176111e1565b61078b8135158061078457506001548235145b60186111e1565b60008080556002805461079d906115c6565b80601f01602080910402602001604051908101604052809291908181526020018280546107c9906115c6565b80156108165780601f106107eb57610100808354040283529160200191610816565b820191906000526020600020905b8154815290600101906020018083116107f957829003601f168201915b505050505080602001905181019061082e91906117d4565b9050610842816080015143101560196111e1565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610873929190611797565b60405180910390a1610887341560156111e1565b80516108bb906001600160a01b031633146108b15760408201516001600160a01b031633146108b4565b60015b60166111e1565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610746573d6000803e3d6000fd5b600060606000546002808054610911906115c6565b80601f016020809104026020016040519081016040528092919081815260200182805461093d906115c6565b801561098a5780601f1061095f5761010080835404028352916020019161098a565b820191906000526020600020905b81548152906001019060200180831161096d57829003601f168201915b50505050509050915091509091565b6109a960086000541460216111e1565b6109c3813515806109bc57506001548235145b60226111e1565b6000808055600280546109d5906115c6565b80601f0160208091040260200160405190810160405280929190818152602001828054610a01906115c6565b8015610a4e5780601f10610a2357610100808354040283529160200191610a4e565b820191906000526020600020905b815481529060010190602001808311610a3157829003601f168201915b5050505050806020019051810190610a66919061164f565b9050610a7a8160c0015143101560236111e1565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610aab929190611797565b60405180910390a1610abf3415601f6111e1565b8051610af3906001600160a01b03163314610ae95760408201516001600160a01b03163314610aec565b60015b60206111e1565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610746573d6000803e3d6000fd5b610b40600a6000541460286111e1565b610b5a81351580610b5357506001548235145b60296111e1565b600080805560028054610b6c906115c6565b80601f0160208091040260200160405190810160405280929190818152602001828054610b98906115c6565b8015610be55780601f10610bba57610100808354040283529160200191610be5565b820191906000526020600020905b815481529060010190602001808311610bc857829003601f168201915b5050505050806020019051810190610bfd919061185e565b6040805160608101825260008082526020820181905291810191909152909150610c2f8261010001514310602a6111e1565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610ca2341560246111e1565b8151610cba906001600160a01b0316331460256111e1565b604051610d0790610ce1906060860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c83608001511460266111e1565b60408051608085013560208201528482013591810191909152610d4d906060016040516020818303038152906040528051906020012060001c8360a001511460276111e1565b610d6283602001600001358360c00151611207565b8082526040808501358214602084015260e084015190911490820152610d8661145f565b825181516001600160a01b039182169052602080850151835182015260408086015184519316920191909152820151610dc0576000610dd3565b8160400151610dd0576001610dd3565b60005b610e0c578160400151610de7576000610dfa565b8160200151610df7576001610dfa565b60005b610e05576002610e0f565b6000610e0f565b60015b6020808301805192909252835182519091015280514360409091015260608085015191510152610e3e8161125a565b50505050565b610e54600a60005414602d6111e1565b610e6e81351580610e6757506001548235145b602e6111e1565b600080805560028054610e80906115c6565b80601f0160208091040260200160405190810160405280929190818152602001828054610eac906115c6565b8015610ef95780601f10610ece57610100808354040283529160200191610ef9565b820191906000526020600020905b815481529060010190602001808311610edc57829003601f168201915b5050505050806020019051810190610f11919061185e565b9050610f26816101000151431015602f6111e1565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610f57929190611797565b60405180910390a1610f6b3415602b6111e1565b80516108bb906001600160a01b03163314610f955760408201516001600160a01b03163314610f98565b60015b602c6111e1565b610faf60066000541460126111e1565b610fc981351580610fc257506001548235145b60136111e1565b600080805560028054610fdb906115c6565b80601f0160208091040260200160405190810160405280929190818152602001828054611007906115c6565b80156110545780601f1061102957610100808354040283529160200191611054565b820191906000526020600020905b81548152906001019060200180831161103757829003601f168201915b505050505080602001905181019061106c91906117d4565b90506110846040518060200160405280600081525090565b6110958260800151431060146111e1565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a33846040516110c69291906116ed565b60405180910390a16110da341560106111e1565b81516110f2906001600160a01b0316331460116111e1565b611100438360200151611207565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081528b8601356080808b019182528d86013560a0808d019182528d5160c0808f0191825260086000554360015589519b8c019c909c529851978a01979097529451909916928701929092525196850196909652945190830152925191810191909152905160e082015261010001610423565b8161075d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261121483826118e7565b91508110156112545760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111fe565b92915050565b6040805160208101909152600081526020820151516002141561134657611291826020015160400151836000015160200151611207565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e89015186015185528d5183526006909955436001558b51808901999099529551888c0152935190941691860191909152519184019190915251828401528451808303909301835260c090910190935280519192610e3e92600292909101906113db565b60208201515160011415611396578151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610746573d6000803e3d6000fd5b815160409081015160208401516060015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610746573d6000803e3d6000fd5b8280546113e7906115c6565b90600052602060002090601f016020900481019282611409576000855561144f565b82601f1061142257805160ff191683800117855561144f565b8280016001018555821561144f579182015b8281111561144f578251825591602001919060010190611434565b5061145b9291506114f5565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016114b36040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b5080546114c4906115c6565b6000825580601f106114d4575050565b601f0160209004906000526020600020908101906114f291906114f5565b50565b5b8082111561145b57600081556001016114f6565b60006060828403121561151c57600080fd5b50919050565b60006060828403121561153457600080fd5b61153e838361150a565b9392505050565b60006040828403121561151c57600080fd5b82815260006020604081840152835180604085015260005b8181101561158b5785810183015185820160600152820161156f565b8181111561159d576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561151c57600080fd5b600181811c908216806115da57607f821691505b6020821081141561151c57634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561162d57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461164a57600080fd5b919050565b600060e0828403121561166157600080fd5b60405160e0810181811067ffffffffffffffff8211171561169257634e487b7160e01b600052604160045260246000fd5b60405261169e83611633565b8152602083015160208201526116b660408401611633565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b03831681526080810161153e60208301848035825260208082013590830152604090810135910152565b60006080828403121561173057600080fd5b6040516080810181811067ffffffffffffffff8211171561176157634e487b7160e01b600052604160045260246000fd5b60405261176d83611633565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146117c557600080fd5b80604085015250509392505050565b600060a082840312156117e657600080fd5b60405160a0810181811067ffffffffffffffff8211171561181757634e487b7160e01b600052604160045260246000fd5b60405261182383611633565b81526020830151602082015261183b60408401611633565b604082015260608301516060820152608083015160808201528091505092915050565b6000610120828403121561187157600080fd5b6118796115fb565b61188283611633565b81526020830151602082015261189a60408401611633565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6000821982111561190857634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212200b9934f16f391f7a291e4c464a345e02f157561f7b5df37e637bccb274d36c7f64736f6c634300080c0033`,
  BytecodeLen: 7355,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:51:61:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:91:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:91:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:56:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:64:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:65:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:72:82:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:73:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:81:108:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
