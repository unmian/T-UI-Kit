###
 # @Author: Quarter
 # @Date: 2022-02-22 11:39:14
 # @LastEditTime: 2022-02-22 11:47:46
 # @LastEditors: Quarter
 # @Description: 
 # @FilePath: /t-ui-kit/remove.sh
### 
#!/usr/bin/env bash
# encoding: utf-8.0
clean_files=`find . -name "*.d.ts"  `
for file in ${clean_files}
do
  if [[ "$file" =~ t\-ui\.d\.ts$ ]] || [[ "$file" =~ node_modules ]]; then
    continue
  else
    rm "$file"
  fi
done